## Repository: 

https://github.com/philippe-gagne/Fall-2021-Interview

## Deployed App URL: 

https://philippe-gagne-outstem-challenge.netlify.app/


## Additional Information

I shared a lot of extra information (including contact info) in my fork's (README)[../README.md], but I've copied the important parts back here:

<hr>

A note to anyone from the OutStem team (or anybody else) who may be reading this down the line: this project is my first time using JavaScript and React. I'm very interested in product design and front-end development, and for that reason, even though it isn't my background, I wanted to challenge myself with this task. A lot of this is going to be me experimenting and trying to figure my way out around JS development for the first time, so, *full disclosure*, it's a bit hacky.

## Implementation Notes
I added a couple of extra things along the way that were not in the requirements but I wanted to point out.

### Password Length Requirement
The challenge README did not mention a requirement for the password length, but the password field label on the reference screenshot says that a minimum of 8 characters are required. So, although it wasn't explicitly asked, I've implemented this requirement for the sake of cohesion (and just because it makes sense).

### "Get Started" Button Hover State
It wasn't very clear what the hover state for this item was supposed to be, but it made the most sense to me that the button change to a slightly darker color when hovered over. Of course, it takes the "activated" red when clicked on, and the other two reds ("primary" and "danger") don't make sense for this micro-interaction, so I came up with a different color to mark the hover state. It isn't in the provided palette, but I took it from a gradient between "primary" red and "activated" red and named it "intermediate". So, when you hover over the "Get Started" button, that's what you're seeing.

## Known Issues
While working on this challenge I was primarily focused on delivering a minimum viable product that met the functionality requirements. This meant that there were a few details along the way that I noticed but either was not able to or did not have the time to fix. I've listed them here with short explanations.

### Background Responsiveness
The background image is not totally responsive. When the viewport is at very wide or very narrow aspect ratios, the background image won't fill the space meant for it. I think this issue could be solved by placing the image in its own div (instead of using the CSS background property). I toyed with this idea for a bit but couldn't find a good solution that also preserved mobile functionality.

### Google Icon Alignment
The Google icon in the "Continue with Google" button is not correctly aligned with the text.

### Checkbox Label Alignment
The label for the Terms of Service / Privacy Policy checkbox is not aligned at the center of the checkbox. I worked on this one for a long time but couldn't get it right.

### Error Widget Icon
The "warning" icon in the error widget is misaligned when the error message is only one line long. The surrounding div doesn't properly wrap around the SVG with appropriate margins. It behaves appropriately (read: looks better) when the text overflows to 2 or more lines.
