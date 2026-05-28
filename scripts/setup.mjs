Hooks.once('init', () => {
  const _orig = FilePicker.browse.bind(FilePicker);
  FilePicker.browse = async function(source, path, options) {
    const result = await _orig(source, path, options);
    if (typeof path === 'string' && path.includes('pbso-ita') && path.includes('lang')) {
      if (!result.files || result.files.length === 0) {
        result.files = ['modules/pbso-ita/lang/it/dnd-phandelver-below.pbso-adventures.json'];
        console.log('pbso-ita | FilePicker patch attivo.');
      }
    }
    return result;
  };
});

Hooks.once('babele.init', () => {
  game.babele.register({
    module: 'pbso-ita',
    lang: 'it',
    dir: 'lang/it'
  });
  console.log('pbso-ita | Registrato con game.babele.');
});
