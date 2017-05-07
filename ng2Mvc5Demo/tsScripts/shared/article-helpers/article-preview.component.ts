import { Component, Input } from '@angular/core';

import { Article } from '../models/index';

@Component({
  selector: 'article-preview',
  templateUrl: './tsScripts/shared/article-helpers/article-preview.component.html'
})
export class ArticlePreviewComponent {
  @Input() article: Article;

  onToggleFavorite(favorited: boolean) {
    this.article['favorited'] = favorited;

    if (favorited) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
}