Graphing Calculator Documentation:

Overview:
The Graphing Calculator project is designed to allow users to enter mathematical equations and visualize them on a graph. The application utilizes external libraries such as Plotly for graphing, numeric for creating a linear space, and mathjs for parsing and evaluating mathematical expressions.

Structure:
The project is divided into three sections:
HTML - Represents the structure of the graphing calculator on the web page.
CSS - Describes the style and design of the application components.
JavaScript - Contains the logic behind plotting graphs and interacting with the application.

HTML Structure:
The page contains a header displaying "Graphing Calculator".
There is an input field where users can enter their equation.
There are two buttons: one to add more equations and another to plot them on the graph.
An empty div with the id "graph" is present, which will be filled with the plotted graph.

CSS Styling:
The styles are divided into:
General Styles: General styles applied to the body, header, container, input sections, equation input, and buttons.
Responsive Styles: Tailored styles for screens with a max-width of 768px. This ensures the application is mobile-friendly and looks presentable on smaller devices.

JavaScript Logic:
Libraries:
Plotly: Used for plotting the graphs.
numeric: Provides mathematical functions. In this case, used for linear spacing.
mathjs: Helps in compiling and evaluating mathematical expressions.

Functions:
plotGraphs(equations):
Arguments: equations - Array of string equations.
Description: Takes in an array of equations, processes them, and plots them using the Plotly library.
Event Listeners:
Add Equation Button: On click, adds another input field for the user to enter an additional equation.
Plot Button: On click, collects all the equations and plots them.

Flow:
The page initially displays an empty plot with X and Y axis labels.
Users can enter equations in the input fields.
Users can add more equations by clicking the "Add Equation" button.
After entering their desired equations, users can click the "Plot" button.
The equations are then plotted on the graph. If an invalid equation is provided, an alert notifies the user.

Important Notes:

Equation Formatting: The application automatically formats equations like 2x to 2 * x to ensure correct evaluation.

Graph Range: By default, the graph is set to display x-values from -1000 to 1000.

Error Handling: If an invalid equation is entered, the application will display an error alert to the user.


External Dependencies:

Plotly - Graph plotting library.

numeric - Numerical mathematical functions.

mathjs - Advanced math library for parsing and evaluating equations.

Customization:
Graph Range: Adjusting the range of the graph can be done by changing the parameters of numeric.linspace.

Styles: All styles are present in the CSS section. Modify them for a customized look and feel.

Error Messages: Customize error messages by modifying the alert statements in the JavaScript section.

Conclusion:
The Graphing Calculator project provides a seamless way for users to input multiple mathematical equations and visualize them on a graph. This documentation gives a comprehensive breakdown of the codebase and its functionality.



![Alt text](image.png)