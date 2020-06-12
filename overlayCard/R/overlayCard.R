#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
overlayCard <- function(front, overlay, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    front = front,
    overlay = overlay
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'overlayCard',
    x,
    width = width,
    height = height,
    package = 'overlayCard',
    elementId = elementId
  )
}

#' Shiny bindings for overlayCard
#'
#' Output and render functions for using overlayCard within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a overlayCard
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name overlayCard-shiny
#'
#' @export
overlayCardOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'overlayCard', width, height, package = 'overlayCard')
}

#' @rdname overlayCard-shiny
#' @export
renderOverlayCard <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, overlayCardOutput, env, quoted = TRUE)
}
