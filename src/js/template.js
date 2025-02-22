export default function viewerTemplate(navbarEnabled) {
  const DEFAULT_TEMPLATE = (
    '<div class="viewer-container" tabindex="-1" touch-action="none">'
      + '<div class="viewer-canvas"></div>'
      + '<div class="viewer-footer">'
        + '<div class="viewer-title"></div>'
        + '<div class="viewer-toolbar"></div>'
        + '%NAVBAR_TEMPLATE%'
      + '</div>'
      + '<div class="viewer-tooltip" role="alert" aria-hidden="true"></div>'
      + '<div class="viewer-button" data-viewer-action="mix" role="button"></div>'
      + '<div class="viewer-player"></div>'
    + '</div>'
  );
  const NAVBAR_TEMPLATE = (
    '<div class="viewer-navbar">'
      + '<ul class="viewer-list" role="navigation"></ul>'
    + '</div>'
  );

  return DEFAULT_TEMPLATE.replace('%NAVBAR_TEMPLATE%', navbarEnabled ? NAVBAR_TEMPLATE : '');
}
