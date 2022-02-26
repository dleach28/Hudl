Hello! Thanks for taking the time to review my log in tests.

Steps to execute:
    1. Download repo from git
    2. Download nod.js from https://nodejs.org/en/download/ if you don't already have it
    3. Follow steps to install node.js
    4. Open CMD prompt
    5. npm install
        -- will make sure node.js is ready to go
    6. cd into the "Hudl Test" folder that you've downloaded (or wherever you places the repo)
    7. npm install 
        -- this will install the necessary packages to execute the tests
        -- there are quite a few, so give it time to install them all
    8. npm run allTests 
        -- this will execute the tests. WebdriverIO will run the tests and run them with a head (so we can have a visual the tests are running). When the scripts have complete, the cmd prompt will tell you if the spec files pass or failed.


Test design reasoning:
    The instructions I received was to setup various tests on the login website. 
    https://www.hudl.com/login

    Upon reviewing this page, I determined it best to setup 3 tests with multiple assertions in each.

    First spec file: 
        Bad email login
            *By attempting to login with a bad email, we should not be presented the home page, but rather, a section should appear on the login page telling the user that the email was not recognized. 
            *To confirm this happens, I assert that the "Need Help?" button has appeared.

        Bad password login
            *Similar to the above. By attempting to login with a bad password, we should not be presented the home page, but rather, a section should appear on the login page telling the user that the email was not recognized. 
            *To confirm this happens, I assert that the "Need Help?" button has appeared.

        Correct credentials login
            *When the correct credentials have been entered, the user should land on the home page. 
            *To confirm this, I assert that the current URL (after login) is equal to "https://www.hudl.com/home". 
            *Should this not be the landing page in the future, this test will begin to fail.

    Second spec file:
        These tests ensure that the various buttons on the login page route to the correct URLs I check the following:
            *The back button shown on page routes to the main hudl page
            *The sign up button routes to the sign up page
            *The organization login routes to the organization login page
        For each, I check this by navigating in the UI to each of these pages and confirming the URL I am routed to is correct.

    Third spec file:
        This is to ensure the 'remember me' functionality is working properly. The webpage should remember my username when the checkbox is toggled.
        This is worthy of it's own spec file as it is important to navigate back to the sign in page, instead of opening a new instance (webdriver IO defaults to opening a new instance).

Test notes:
    There are a couple of major drawbacks with using WebdriverIO.
        *You MUST use chrome to execute these tests
            *This is not ideal as it would be nice to have support for Safari and Firefox
            *The tests might run on the other browsers, but they aren't officially supported
        *I am unable to completely hide the user password in an elegant way
            *Ideally, I could store this on a database somewhere, but with this excercise, I need to keep this package all in one without the need for additional inputs.
                *If I had a db to store it, I could call the pw from it using something like axios
            *My solution was to refactor and store this info in a js file, then call it in the spec files. This isn't perfectly secure, but it's a little deeper.
        *Last year, WebdriverIO got rid of sync mode due to changes in Chromium
            *This is why you'll see "await" everywhere.
            *I could have used sync mode, but it would require extra steps on your end to ensure you have an older version of NPM (more trouble than it's worth).

    I didn't include any API testing as part of this. I didn't find any endpoints that would have any real meat and provide something the UI tests are not. I could have tested the /login endpoint to ensure it was returning a 200, but decided against it as the login spec tests confirm that it is online by way of actually logging in.

That's about it! These tests ensure that the login page is working as intended and that all the links on the page go where they are supposed to. Thanks again for taking the time to review this! 

--Derek Leach
