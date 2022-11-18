# bandSite

This is a band website for Old Lou's Ragtime Band. 
It contains a Homepage, About Us page, Photos page, Videos page, and Contact Us page.
The website has responsive mobile-first design, and currently has 5 main JavaScript features.

1. "Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)". 
This is found on the Homepage with the "Album Release Countdown"

2. "Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app."
This is found on the Photos Page where I used an array of images to create an automatic slide show that begins as soon as the page loads.

3. "Retrieve data from a third-party API and use it to display something within your app."
This is found on the Videos page where the YouTube Data API retrieves the thumbnail and video titles of the band's 5 latest videos on their YouTube channel.
This simply displays the retrieved data of the thumbnail and title, but does not (yet) play the video. A separate YouTube iFrame api is required for this function.


4. "Use a regular expression to validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved)."
This is found on the Contact Us page where the Name, Phone Number, Email, and Message fields are all validated before sending the message.
Message is not yet stored locally.

5. "Analyze text and display useful information about it. (e.g. word/character count in an input field)"
This is found on the Contact Us page where the Message box has a charcter counter, and a minimum character is required to send the message.