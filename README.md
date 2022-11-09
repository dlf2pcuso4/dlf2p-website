# dlf2p.com

Card searcher and deck builder for Yu-Gi-Oh!

V0.1:

- Card info now overlays the screen in deck builder to improve UI for mobile users
- Multiple other size and position adjustments for improved mobile experience
- Removed "Add Card" button in favour of the "Auto-add" feature
- A popup on the top left corner is added to indicate that a card is added
- Bug fix: Main deck cards were showing when empty spaces in extra deck are clicked
- Bug fix: Cards without images no longer crash the webpage, and are now displayed with a default image instead

V0.2:

- Card info overlay added for deck display
- Decks can now be renamed
- Changes to url parameters ("deckcode" replaced with "d")

V1.0:

- Webpages made:
  - index
  - f2p-decks
  - kog-decks
  - guides
  - best-techs
  - articles
  - article editor
- All pages: Added navigation menu
- deck-builder.html & deck.html: Updated url parameters ("x" replaced with "\_")

V1.1 (Release Version):

- General UI: Improved mobile UI scaling
- deck-builder.html: Added filters for card searches (multiple filters can be added)
  - Card type (monster, spell, trap)
  - Monster type (normal, effect, fusion etc.)
  - Spell/trap type (normal, continuous, quick-play etc.)
  - Level/Rank
  - Link
  - Attribute
  - Type
- deck-builder.html: Duel Links exclusive cards can now be added to a deck
- deck-builder.html & deck.html: Added DL exclusives to url parameters
- deck-builder.html & deck.html: Removed unnecessary form tags

V1.2 (Public Announcement Version):

- index.html: Added social links
- Card info popup: Added "how to obtain" information
- best-techs.html: Added card info popup
- best-techs.html: Replaced card effect column with card usage information
- deck.html: Added skill in downloaded image
- Added utility page: deck-embed.html

V1.3:

- All pages: Fixed navigation menu text height offset error
- index.html: Added "What's new" section
- f2p-decks.html & kog-decks.html: Added deck sorting
- stylesheet.css & stylesheet-mobile.css: Improved documentation and added styles from individual html pages
- deck-builder.html:
  - Added rarity filter
  - Added toggle for unreleased cards
  - Enter key now works for text inputs
  - Limited maximum amount of search results to 300
- article.html: Added deck embeds and hyperlinks
- article-editor.html: Fixed compilation error when styled tags are used
