---
title: 'How to Code and Setup a Twitter Bot using a Raspberry Pi'
---

Tags: [[Twitter]] [[TwitJS]] [[Tech]]

At the beginning of this quarantine I embarked on a short lived project to build a Twitter Bot. This project was born primarily out of boredom but also out to create a bot whose sole purpose was to be my friend [[Micah Meadowcroft]]’s biggest fan. ([Ironic since he is wary of technology’s effect.](https://www.thenewatlantis.com/publications/lost-on-mars)).

The bot would daily summarize Micah’s tweeting statistics and then summarize them in a daily tweet. Down the line I toyed with using language processing to react to different key words or possibly do a bot “impersonation” account. Still might return to this project at some point. although for now, summarizing his twitter accounts is impossible because the bot was blocked 😬 (which makes sense the bot was stalking him). The bot posted its first tweet on March 28 and ran for just over a month collecting stats before Micah noticed it and blocked it. All in all I consider the project a successful initial exploration of the twitter api.

https://twitter.com/tweets_micah/status/1243923857876103174

## I learned:

- How to setup a developer account on Twitter
- How to programmatically tweet, reply, and parse a tweet
- Create a NodeJS server running on my [[raspberry pi]]
- Use a cronjob to run a node script every day

## Things Learned

Since I’m not likely to do much more work on this at the moment, I wanted to record some of the nuances for later reference while the project was still fresh.

- Using environment variable stored in a .bash_profile makes it difficult to debug.
- Creating a [[cronjob]] I had to explicitly have it use the .bash\*profile and use the full path to the script
  - `00 6 _ \* \* ./home/user/.bash_profile; /home/user/folder/script.sh`
- Every thing on twitter has a unique ID called a [snowflake](https://developer.twitter.com/en/docs/basics/twitter-ids) that is generated based on time. Which means in theory its possible to reverse engineer the time a tweet was sent based on the snowflake alone. This probably isn’t super useful though because one of a tweet’s properties is `tweet.created_at`
- Other useful tweet properties are `tweet.text` , `tweet.favorite_count`, and `tweet.retweet_count`
- If a tweet is a Retweet the `tweet.text` begins with the characters `RT` if it is a reply it begins with the `@` character
- The Twit functions I used were `.get(‘users/show’, {screen_name: 'user_name'}...)` to get the ID of a specific user `.get(‘statuses/user_timeline,{id: twitter-id}...)` to get the users timeline and then once I had all the tweets I would parse them based on the tweet.created_at property.
- I also used `.post(‘statuses/update’,{status: text},…)` to post a tweet
- There are also some functions I didn’t use but I wrote in the learning process [in this file](https://github.com/dschapman/micahmeadowcrofttweets/blob/master/index.js)

## Tools used:

- NodeJS
- [TwitJS](https://github.com/ttezel/twit)
- Raspberry Pi running raspbian

## References

- [Create your own twitter bots from @ahandvanish on @eggheadio](https://egghead.io/courses/create-your-own-twitter-bots)
- [GitHub - dschapman/micahmeadowcrofttweets](https://github.com/dschapman/micahmeadowcrofttweets)
