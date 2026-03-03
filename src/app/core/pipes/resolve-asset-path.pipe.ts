import { Pipe, PipeTransform } from '@angular/core';
import { AssetUrlService } from '../services/asset-url.service';

@Pipe({
  name: 'resolveAssetPath',
  standalone: true
})
export class ResolveAssetPathPipe implements PipeTransform {

  constructor( private assetUrlService: AssetUrlService) {}

  transform(value: any): any {
    return this.assetUrlService.getUrl(value);
  }

}
