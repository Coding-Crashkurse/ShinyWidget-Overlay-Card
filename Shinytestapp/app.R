
library(shiny)
library(overlayCard)

# Define UI for application that draws a histogram
ui <- fluidPage(

    # Application title
    titlePanel("Old Faithful Geyser Data"),

    # Sidebar with a slider input for number of bins
    sidebarLayout(
        sidebarPanel(
            sliderInput("bins",
                        "Number of bins:",
                        min = 1,
                        max = 50,
                        value = 30),

        ),


        # Show a plot of the generated distribution
        mainPanel(
            overlayCardOutput("wuff1"),
            overlayCardOutput("wuff2"),
            overlayCardOutput("wuff3")
        )
    )
)

# Define server logic required to draw a histogram
server <- function(input, output) {

    output$distPlot <- renderPlot({
        # generate bins based on input$bins from ui.R
        x    <- faithful[, 2]
        bins <- seq(min(x), max(x), length.out = input$bins + 1)

        # draw the histogram with the specified number of bins
        hist(x, breaks = bins, col = 'darkgray', border = 'white')
    })

    output$bla <- renderText({
        input$bins
    })

    output$wuff1 <- renderOverlayCard({
        overlayCard(id="mh3", input$bins, background = "yellow")
    })
    
    output$wuff2 <- renderOverlayCard({
        overlayCard(id="mh", "Ich bin statischer text", background = "green")
    })
    
    output$wuff3 <- renderOverlayCard({
        overlayCard(id="mh2", "Ich wäre gerne ein Object", background = "orangered")
    })

}

# Run the application
shinyApp(ui = ui, server = server)
