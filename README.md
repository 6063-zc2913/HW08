I use the isRedSimilar function to determine the red similarity threshold. Two colors are considered similar in red if the difference between their red components is less than this threshold. The function compares whether the red, green, and blue components of two colors are within their respective similarity thresholds. If so, the function returns true, indicating that the two colors are similar in RGB space; otherwise, it returns false. I changed the color to a randomly generated RGB color.

Then I create a color picker (createColorPicker). Use the isSimilar function to check whether the color of that pixel is similar to the color selected by the user in the color picker. If the colors are similar, set the red component of that pixel to 0, the green component to 255, and the blue component to the value of the randomizeColorsButton. This means that the color selected by the user replaces similarly colored parts of the image.


I tried the work"Composition with Red Blue and Yellow Piet Mondrian"(the other image inside the file). The red color is successfully changed but blue one is unrecognized.
I think its because the blue in the new painting is more greener (green RGB has bigger value).

Because our similarity value has a threshold, so if the color in the new image is too different from the old one, it might not work. To resolve this, we can try lifting up the threshold, but that would cause some colors to be wrongly treated as similar. 