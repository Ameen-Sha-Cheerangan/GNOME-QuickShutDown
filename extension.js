import Clutter from "gi://Clutter";
import St from "gi://St";
import GObject from "gi://GObject";

import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import * as PanelMenu from "resource:///org/gnome/shell/ui/panelMenu.js";
import * as SystemActions from "resource:///org/gnome/shell/misc/systemActions.js";

const ShutdownButton = GObject.registerClass(
  class ShutdownButton extends PanelMenu.Button {
    _init() {
      super._init(0.0, "Shutdown Button", true);

      const box = new St.BoxLayout({ style_class: "panel-status-menu-box shutdown-button" });
      this._icon = new St.Icon({
        icon_name: "system-shutdown-symbolic",
        style_class: "system-status-icon",
      });

      box.add_child(this._icon);
      this.add_child(box);

      this.connectObject(
        "event", (actor, event) => {
          const type = event.type();
          if (
            type === Clutter.EventType.BUTTON_RELEASE ||
            type === Clutter.EventType.TOUCH_END
          ) {
            SystemActions.getDefault().activatePowerOff();
            return Clutter.EVENT_STOP;
          }
          return Clutter.EVENT_PROPAGATE;
        },
        this,
      );
    }
  },
);

export default class ShutdownButtonExtension extends Extension {
  enable() {
    this._settings = this.getSettings();

    this._settings.connectObject(
      "changed::position", () => this._updatePosition(),
      this,
    );

    this._updatePosition();
  }

  disable() {
    this._settings.disconnectObject(this);
    this._settings = null;

    if (this._button) {
      this._button.destroy();
      this._button = null;
    }
  }

  _updatePosition() {
    if (this._button) {
      this._button.destroy();
      this._button = null;
    }

    this._button = new ShutdownButton();
    const position = this._settings.get_string("position") || "right";

    if (position === "left") {
      Main.panel.addToStatusArea("shutdown-button", this._button, 0, "left");
    } else {
      Main.panel.addToStatusArea(
        "shutdown-button",
        this._button,
        -1,
        "right",
      );
    }
  }
}
