import parse from 'csv-parse/lib/sync';
import parser from 'fast-xml-parser';
import fs from 'fs';
import _ from 'lodash';
import { CciNistMappingItem } from './CciNistMappingItem';

const options = {
  attributeNamePrefix: '',
  textNodeName: 'text',
  ignoreAttributes: false
};

export class CciNistMapping {
  data: CciNistMappingItem[];

  constructor(xmlDataPath: string) {
    this.data = []
    fs.writeFileSync('libs/heimdall_tools/converted_jsons/UCCI.json', JSON.stringify(parser.parse(fs.readFileSync(xmlDataPath, { encoding: 'utf-8' }), options)));
    let tags = _.get(parser.parse(fs.readFileSync(xmlDataPath, { encoding: 'utf-8' }), options), 'cci_list.cci_items.cci_item')
    if (Array.isArray(tags)) {
      tags.forEach(element => {
        let path = ''
        if (Array.isArray(_.get(element, 'references.reference'))) {
          path = 'references.reference[0].index'
        } else {
          path = 'references.reference.index'
        }
        this.data.push(new CciNistMappingItem(_.get(element, 'id'), _.get(element, path)))
      })
    }
  }

  nistFilter(identifiers: string[], defaultNist: string[]) {
    const DEFAULT_NIST_TAG = defaultNist
    if (identifiers.length === 0) {
      return DEFAULT_NIST_TAG
    } else {
      let matches = new Array<string>()
      identifiers.forEach(id => {
        let item = this.data.find((element) => element.cci === id)
        if (item !== null && item !== undefined && item.nistId !== '' && matches.indexOf(item.nistId) === -1) {
          matches.push(item.nistId)
        }
      })
      if (matches.length === 0) {
        return DEFAULT_NIST_TAG
      }
      return matches
    }
  }
}
