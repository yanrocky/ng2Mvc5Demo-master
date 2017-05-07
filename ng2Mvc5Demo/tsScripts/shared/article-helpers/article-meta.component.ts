import { Component, Input } from '@angular/core';

import { Article } from '../models/index';

@Component({
  selector: 'article-meta',
  templateUrl: './tsScripts/shared/article-helpers/article-meta.component.html'
})
export class ArticleMetaComponent {
  @Input() article: Article;
}
