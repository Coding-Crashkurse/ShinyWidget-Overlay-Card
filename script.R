install.packages("devtools")
install.packages("htmlwidgets")

devtools::create("overlayCard")
setwd("./overlayCard")

htmlwidgets::scaffoldWidget("overlayCard")

devtools::document() 
devtools::install()

library(overlayCard)

overlayCard::overlayCard("Fronttext", "overlayText")
