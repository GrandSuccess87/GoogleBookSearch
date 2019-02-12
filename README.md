# Google Book Search

**Summary**

A web application that allows a user to search a comprehensive index of full text-books and receive relevant results based on a query.
Each query returns the author, title, publisher, and preview.  Each of these will direct the user to more information about the book such as price, available vendors selling the book such as *Amazon or Barnes & Noble*, the ability to read user reviews or purchase the book online as an Ebook *plus more!*.

**Tools and Technologies**
1. Google Book API
2. JQuery
3. Javascript
4. Bootstrap 4.0
5. AJAX/JSON
6. Local Storage
7. HTML5
8. CSS3
9. Jestjs

## Challenges
1. Finding the appropriate tools and technologies to run my test cases.  So far I've tried: mocha and chai as well as karma, but I am still working on this.
<strong>UPDATE:</strong>I have found a sucessful test automation tool called Jest to run my test cases.  
- To view the successful execution of my test cases please type `npm run test` in the command line.
- For more information on how to set up and run your test cases, visit [Jestjs.io](https://jestjs.io/)
2. For some reason, deploying to heroku proved to be relatively difficult compared to my past experiences. (several times I received errors regarding inability to parse the package.json)  
<strong> You can visit the application <a href="https://grandsuccess87.github.io/GoogleBookSearch/">here</a> on Github. </strong>
3. Maintaining content between web browser tabs for the user continues to be a challenge.  For now, I am still using local storage to store data in the users' current browswer session.
4. I want to tackle the issue of limited results returned to the user.  I decided to go about this two ways:
   - Pagination: The pagination shows up great on the web application.  The mystery, still, for me is passing the search input into the `href`.  To solve this I tried making the `search` variable global, however for some reason the search field was recognized as empty despite there being input in the search field.  I also declared the `search` variable within the scope of my pagination functions and created a "click" eventListener for the functions.  In addition, I still need only 10 books per page.
   - Bootstrap Modal: The modal also shows well on the web application.  It is definitely functional, as you will see in my Overview Section below, yet it just doesn't quite function under the condition that there are less than 10 results returned.  So this is something to work on.
5. It is still a little unclear why a search result may return only 1 result or 10 results as opposed to 30+.
6. I updated my code to reflect how the application should handle an API error when a book does not exist in the database.  You will also see this in my Overview Section below.  This too needs some work but nonetheless I think it is a good start.

**External Quality Bugs Fixed**
- The application is now cross browser compatible and book cover images no longer appear vertically stretched in Safari or Firefox.  
*Safari, Firefox, Chrome, and Opera are all supported.*
- *Undefined*is now handled properly.
- Multiple authors are now comma separated. 
- Updated the lang attribute in the `<html>` tag to include English, Spanish, Japanese, Chinese, and Russian.  I also added a lang property called _source_ into the ajax call which is set to English by default.

**Internal Quality Bugs Fixed**
- .DS_Store files have been placed in a .gitignore file.
- Edited code to remove commented out `<link>`, `<script>`, and `<div>` tags.
- Refactored code for renderBook() function so that responsibilities are separated and placed in their own function.
- Formatted javascript code for proper indentation.
- Removed unused images.
- Solved the issue with local storage by only using `localStorage.setItem()` since I simply want to save data in the broswer session.

## Overview 

**Home Page**
![homepage](/assets/images/GBS_Image1.png)

<hr>

**Search Query with Title**
![title_image](/assets/images/GBS_Image2.png)

**Search Query with Title**
![title_image](/assets/images/GBS_Image2b.png)

<hr>

**Search Query with Author**
![author_image](/assets/images/GBS_Image3.png)

![author_image](/assets/images/GBS_Image3b.png)

<hr>

**Search Query with Topic**
![topic_image](/assets/images/GBS_Image4.png)

**Search Query with Topic**
![topic_image](/assets/images/GBS_Image4b.png)

<hr>

**Search Query implemented with Pagination**
![pagination_image](/assets/images/pagination_image.png)

<hr>

**Search Query implemented with Bootstrap Modal informing the user of limited results returned**
![bootstrap_modal](/assets/images/bookLimitModal.png)

<hr>

**Successful test execution of getSearchInput() function**
![test_case_image](/assets/images/bookjs_testcase.png)

<hr>

**Code base for how the application should handle an API error, for example, if a book does not exist**
![bootstrap_modal](/assets/images/API_ERROR_1.png)

<hr>

## Notes
I had a lot of fun building this application and challenging myself in the process.  Although there is always room for improvement, I believe I was successful in retreiving the desired outcome and I feel great that I have learned so much throughout this process!
Thank You

<hr>