import * as patch from 'path';
import moduleAlias from 'module-alias';

const files = patch.resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src': patch.join(files, 'src'),
    '@test': patch.join(files, 'test')
});