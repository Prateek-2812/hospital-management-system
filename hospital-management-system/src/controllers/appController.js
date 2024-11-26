import { pages } from '../models/appModel.js';
import { renderPage } from '../views/appView.js';

export const getPageContent = (page) => {
  return renderPage(pages[page] || '<h1>404</h1><p>Page not found!</p>');
};
