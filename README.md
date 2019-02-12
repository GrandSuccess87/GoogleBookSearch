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

## Challenges
1. Finding the appropriate tools and technologies to run my test cases.  So far I've tried: mocha and chai as well as karma, but I am still working on this.
<strong>I have found a sucessful test automation tool called Jest to run my test cases.  To view the successful execution of my test cases please type `npm run test` in your command line</strong>
2. For some reason, deploying to heroku proved to be relatively difficult compared to my past experiences. (several times I received errors regarding inability to parse the package.json)  
<strong> You can visit the application <a href="https://grandsuccess87.github.io/GoogleBookSearch/">here</a> on Github. </strong>
3. Maintaining content between web browser tabs for the user.  For now, I used local storage as a way to store data in the users' current browswer session.

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

**Search Query with test execution**
![test_case_image](/assets/images/bookjs_testcase.png)

<hr>

**Search Query implemented with Pagination**
![pagination_image](/assets/images/pagination_image.png)

<hr>

**Search Query implemented with Bootstrap Modal**
![bootstrap_modal](/assets/images/bookLimitModal.png)

<hr>

**Code base for how the application should handle an API error, for example, if a book does not exist**
![bootstrap_modal](/assets/images/API_ERROR_1.png)

<hr>

## Notes
I had a lot of fun building this application and challenging myself in the process.  Although there is always room for improvement, I believe I was successful in retreiving the desired outcome and I feel great that I have learned so much throughout this process!
Thank You

<hr>