/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */
const isFlobbyBird = (isRed,isSpotted) => isRed&&isSpotted

const isBloggyBird = (isRed,isSpotted) => !isSpotted && isRed

const isFlibbleBird = (isRed,isSpotted) => !isRed&&isSpotted

const isGlobbyBird = (isRed,isSpotted) => !isRed&&!isSpotted

const eatsWorms = (isRed,isSpotted) => isRed||isSpotted

const eatsNuts = (isRed,isSpotted) => isRed||!isSpotted

const eatsFish = (isRed,isSpotted) => isSpotted||!isRed

const eatsMice = (isRed,isSpotted) => !isRed||!isSpotted

const isRed = (redBird) => {
  return redBird=== 'Flobby' || redBird=== 'Bloggy'
}

const isSpotted = (spottedBird) => {
  return spottedBird === 'Flobby' || spottedBird == 'Flibble'
}