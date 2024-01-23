
### 1.1 Code smells & other improvements

- I did a quick review on the code,couldn't find any of the typical code smells, like unused imported libraries and too many nested functions.

- I observed that comments should have been added in the code to provide hints to new developers.

- Added a loading spinner on API call for better UX.

- Pipe dateformat fullfills the current requirements, it is better to avoid custom functions. 

- On book-search.component.ts changed the code to consume the books$ observable directly, instead of reassigning values on ngOnInit(), the store values should not be mutated.

- The current application is not responsive we can make it responsive.

- Clear search button for search textbox shows when user enters keywords.

- We can add auto-suggestions when user typing in search field.


### 1.2 Fixed failed test cases 

- 2 test cases failed in the "reading-list.reducer.spec.ts" file failedAddToReadingList and failedRemoveFromReadingList.


### 1.3 Accessibility issues (Lighthouse and Manually accessibility issues)


Issues found using lighthouse are follows:

- No accessible name (aria-label) for search buttons.

- Background and foreground colors do not have a sufficient contrast ratio in 'book-search.component.html' file.


Issues not found by lighthouse are follows:

- User can switch between the item using TAB in reading list.

- Missing 'aria-label' for some buttons once there are search results available.

- Images with no alt attribute.