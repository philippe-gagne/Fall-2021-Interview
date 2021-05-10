
# OutStem Back-End Challenge
Welcome to the OutStem back-end challenge. Submission instructions are listed below. The deadline to submit this challenge is **May 24th 11:59pm**. We would like to emphasize that we are looking for effort, and that the challenge is just part of our discussion with you during the interview, so don’t worry if your solution is *hacky* or even if it doesn’t work, we want to see it!

## Challenge – URL Shortening Service
Your assignment is to implement a URL shortening service using any language and any framework.

### Brief

A URL shortening service is a service like [bit.ly](https://bit.ly) where you enter a URL such as https://forms.outstem.io/best-summer-camps-ever/camps and it returns a short URL such as http://short.ly/GeAi9K. The expected completion time for this assignment is 2 hours.

## Technical Requirements

- Implement assignment using:
  - Language: any language (preferably NodeJS)
  - Framework: any framework
- Two endpoints are required
  - `/encode` - Encodes a URL to a shortened URL
  - `/decode` - Decodes a shortened URL to its original URL.
- Both endpoints should return JSON
- There is no restriction on how your encode/decode algorithm should work. You just need to make sure that a URL can be encoded to a short URL and the short URL can be decoded to the original URL. **You do not need to persist short URLs to a database. You can simply keep them in memory.**
- Provide **extensive** API tests for both endpoints

## Evaluation Criteria

- Use best practices
- API implemented featuring a /encode and /decode endpoint
- Show us your work through your commit history
- Completeness: did you complete the features? Are all the tests running?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the application tested thoroughly?

## Pluses
- Use a database to persist the short URLs
- Dockerize the application

## Submission

Please submit your solution in the 2021 fall interview GitHub repository.

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