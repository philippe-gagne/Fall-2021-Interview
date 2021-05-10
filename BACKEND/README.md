
# OutStem Back-End Challenge
Welcome to the OutStem back-end challenge. Submission instructions are listed below. The deadline to submit this challenge is **January 25th, 2021 @ 1:00 AM EST**. We would like to emphasize that we are looking for effort, and that the challenge is just part of our discussion with you during the interview, so don’t worry if your solution is hacky or even if it doesn’t work, we want to see it!

## Challenge – Frank’s Workshop 2.0

Our client Frank is a DIY maniac,  few years ago, he started a WordPress blog to share his DIY recipes, called Frank’s Workshop, after receiving a substantial following on Frank’s Workshop he has decided to take it a step further - he wanted to make Frank’s Workshop an application where he can store his DIY recipes safely and even share them with the world, he also wanted to build a community where anyone can post recipes on his platform, what an amazing idea! Frank also has plans to monetize his platform, he wants to introduce premium content where users can subscribe to the app and get access to those recipes and content, he also wants other users who post on his platform to have access to the monetization feature.

Here are four major requirements of Frank’s Workshop:

- Users can browse and view DIY recipes
- Users can create DIY recipes
- Users can manage their DIY recipes
- Users can pay to access premium DIY recipes
    
## Technical requirements

1. The application should have a data model for users and recipes
2. Recipes should keep track of the following data
     - Created date
     - Last updated date
     - Author
     - Content
     - Category
     - Is Private
     - Is Premium
     - Is Deleted
3. User object should keep track of the following data
     - First name
     - Last name
     - Email
     - Is Premium Member
4. The application will have an endpoint for creating a new recipe
     - The author field is the user’s ID
     - The content field cannot be empty
     - The isPrivate field is defaulted to true
     - The isPremium field is defaulted to false
     - The category field is nullable
     - The application should reject the request if any additional fields are present in the request body
5. The application will have an endpoint for editing an existing recipe
     - User can only edit their own recipes
     - User can only edit the content, category, is premium, and is private attributes of a recipe
     - Make sure the last updated date is updated
6. The application will have an endpoint for deleting an existing recipe
     - User can only delete their own recipes
7. The application will have an endpoint to make a user premium
     - For simplicity sake, just include a transaction token (any string) in the request body
     - The endpoint will mark the user as is premium
8. The application will have an endpoint for fetching a list of recipes.
     - The endpoint can optionally include the user’s ID, if the ID is included, and user is premium, premium content will also be included in the results
     - No private results should be included in the result unless it belongs to the requester.
9.  The application will have an endpoint for loading a single recipe
     - If the recipe is private or premium, and user does not have access, reject the request.
    
While we recommend that you use NodeJS and PostgreSQL, you may use any technology of your choice. You can use libraries and frameworks or build it completely from scratch.

## Frank’s nice to haves

- It would be nice to have an oAuth 2.0 based authentication system and passing access tokens instead of simply passing the user’s ID around
- It would be nice to have an endpoint for creating and updating user information
- It would be nice to support file and image uploads for the recipes
- It would be nice to have steps for each recipe
- It would be nice to have a system to support marketing efforts (coupons, discounts, etc.)
- It would be nice to have a system to recommend recipes based on user interest
- It would be nice for the endpoint that lists recipes to support filtering by category and pagination
    
Add any features that you feel the system can benefit from!

## Submission

Please submit your solution in the 2021 Summer interview GitHub repository.

### Via Pull Request (Recommended)

Edit the SUBMISSION.md file and pull request your changes. Make sure to include the following information in the file:

- A link to your public GitHub repository
- Instructions on how to run your application
- Any additional information you would like us to know about.

### Via GitHub Issue

You can also submit your solution via GitHub Issues, create an issue in the repository with the following information:
- A link to your public GitHub repository
- Instructions on how to run your application
- Any additional information you would like us to know about.