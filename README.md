Git repository:
zp2c

NPM packages:
zp2c-components
@zp2c/theme
@zp2c/design-elements

@zp2c/icons
@zp2c/color
@zp2c/grid
@zp2c/layout
@zp2c/motion
@zp2c/spacing
@zp2c/typography
@zp2c/visual-forms

lerna init
lerna create zp2c-components
  name @zp2c/zp2c-components
lerna create theme
  name @zp2c/theme
lerna create design-elements
  name @zp2c/design-elements
lerna create icons
  name @zp2c/icons
lerna create color
  name @zp2c/color
lerna create grid
  name @zp2c/grid
lerna create layout
  name @zp2c/layout
lerna create motion
  name @zp2c/motion
lerna create spacing
  name @zp2c/spacing
lerna create typography
  name @zp2c/typography
lerna create visual-forms
  name @zp2c/visual-forms

lerna add @zp2c/color --scope @zp2c/design-elements
lerna add @zp2c/grid --scope @zp2c/design-elements
lerna add @zp2c/layout --scope @zp2c/design-elements
lerna add @zp2c/motion --scope @zp2c/design-elements
lerna add @zp2c/spacing --scope @zp2c/design-elements
lerna add @zp2c/typography --scope @zp2c/design-elements
lerna add @zp2c/visual-forms --scope @zp2c/design-elements
