import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';
import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class ShutdownButtonPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        const settings = this.getSettings();

        const page = new Adw.PreferencesPage();
        const group = new Adw.PreferencesGroup({
            title: 'Appearance',
        });
        page.add(group);

        const model = Gtk.StringList.new(['Left', 'Right']);

        const row = new Adw.ComboRow({
            title: 'Button Position',
            subtitle: 'Choose where to place the shutdown button on the top panel.',
            model: model,
        });

        const initialValue = settings.get_string('position');
        row.set_selected(initialValue === 'left' ? 0 : 1);

        row.connect('notify::selected', () => {
            const selected = row.get_selected();
            settings.set_string('position', selected === 0 ? 'left' : 'right');
        });

        group.add(row);
        window.add(page);
    }
}
