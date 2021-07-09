import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import { NessusPluginsNistMappingItem } from './NessusPluginsNistMappingItem';

export class NessusPluginsNistMapping {
  data: NessusPluginsNistMappingItem[];

  constructor(csvDataPath: string) {
    this.data = []
    const contents = parse(fs.readFileSync(csvDataPath, { encoding: 'utf-8' }), { skip_empty_lines: true })
    if (Array.isArray(contents)) {
      contents.slice(1).forEach((line: string[]) => {
        this.data.push(new NessusPluginsNistMappingItem(line))
      })
    }
  }
}
