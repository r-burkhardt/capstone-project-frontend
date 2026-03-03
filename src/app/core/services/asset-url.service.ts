import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AssetUrlService {

  constructor() { }

  getUrl(asset: string) {
    let output = asset;
    if (!location.hostname.startsWith("localhost")) {
      output = asset;
    }
    return output;
  }
}
