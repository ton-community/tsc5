# 🏆 Welcome to TON Smart Challenge #5

### by [TON Foundation](https://ton.org/) & [Codeforces](https://codeforces.com/)

## 📝 Tasks

1. [Inheritance Smart Contract](/descriptions/1.md)
2. [Splitter Smart Contract](/descriptions/2.md)
3. [Universal Versioning Template](/descriptions/3.md)
4. [Quantum Maze](/descriptions/4.md)

The goal of the contestants is to provide a code that matches the description.

Each task except Task 4 may give the contestant either 0 or 5 to 6 score points: 5 for all tests passed plus "gas-score" from 0 to 1 (0 for "infinite" gas consumption, 1 for 0 gas consumption, dependence is inverse exponent).

Task 4 provides two sets of tests - basic and advanced:

- **Basic tests** - offer 3 points in case the solution is passing all the tests
- **Advanced tests** - offer 0 or 4 to 5 points (4 for all tests passed plus "gas-score" from 0 to 1)

## 📅 Solution submission guide and terms

1. **Registration Process**: Before you begin, make sure to go through the registration process via the **[@smartchallengebot](https://t.me/smartchallengebot?start=utm_github_repo)**. Your solutions will not be accepted if you are not properly registered.

2. **Create a Private GitHub Repository**: Clone this repository and set it as your own private GitHub repo. **Ensuring the visibility configs are set to "private"** is crucial to safeguarding your solution.

3. **Set Your Token**: Utilize the `token` provided to you during registration in Telegram bot and set it as a secret variable called USER_TOKEN in your private repository. You can learn more about setting secret variables in the [official GitHub documentation](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

4. **Submit Your Solution**: When you are ready to submit your solution, simply push your code into your private repository. The code will be sent to the task review server, and GitHub actions will display the status of your submission.

5. **Solution Evaluation**: If at least one of your solutions works well, your submission will be counted. Feel free to push solutions for more tasks; GitHub actions will run your code against tests and count successful submissions. To see a detailed report on your submission, proceed to GitHub Actions tab and you will see a similar report along with possible errors if present:
<div align="center">

| Task ID | Compiled | Tests Passed | Points |  Gas Used   |             Compilation Error              |
| ------- | :------: | :----------: | :----: | :---------: | :----------------------------------------: |
| 1       |    ❌    |      ❌      |   0    |     N/A     | [Error Details](#compilation-error-task-1) |
| 2       |    ✅    |    ❌ 0/6    |   0    |      0      |                                            |
| 3       |    ✅    |   ✅ 10/10   | 5.127  | 491,235,717 |                                            |
| 4       |    ❌    |      ❌      |   0    |     N/A     | [Error Details](#compilation-error-task-4) |
| 5       |    ❌    |      ❌      |   0    |     N/A     | [Error Details](#compilation-error-task-5) |

</div>

6. **Check Your Points**: To check your solution points, review the logs of the GitHub action for your latest commit. Additionally, you can find your solution points in the menu button inside of the Telegram bot.

**Best of luck with your submissions!**

## ‼️ Important rule:

Please don't share your solution's code with anybody. If someone's submission will be suspected of using your code - both participants will be disqualified. Repeated case will cause lifetime ban from TON Smart Challenges.

## 🏆 Scoring and Prizes

Winners of the contest will receive prizes denominated in Toncoin, the native cryptocurrency of TON blockchain, which is also used as a resource for contract execution.

The pool of **$20,000 in Toncoin** will be split equally between the top 100 participants of the leaderboard after plagiarising participants are removed. Every participant on the leaderboard will receive a SBT (participation soulbound token).

Prize pool distribution:

- $7,000 in TON - The top 15 of participants
- $7,000 in TON - 16-45th participant
- $6,000 in TON - 46-100th participant

## 🚀 Getting Started with TON

New to blockchain or TON development? Start here:

- [Blockchain Basics](https://blog.ton.org/what-is-blockchain)
- [TON Intro](https://docs.ton.org/learn/introduction)
- [Developer Portal](https://ton.org/dev?filterBy=developSmartContract)

### 📘 Essential FunC Resources

Master the FunC language with these must-have materials:

- [TON Blockchain Course](https://stepik.org/course/176754/info)
- [FunC Docs](https://docs.ton.org/develop/func/overview)

Find ready-to-use smart contract examples [here](https://docs.ton.org/develop/smart-contracts/examples).

### 🛠️ Tools for Tact Compilation and Testing

#### For FunC Challenge

For FunC Challenge we recommend **cloning current repository** and follow the submission guide described above.

#### To quickstart your own FunC project

While we recommend [blueprint](https://github.com/ton-org/blueprint) for working with FunC contracts, [toncli](https://ton.org/docs/develop/smart-contracts/testing/toncli) is also a viable option for compiling and local testing.

### FunC syntax highlight

For a more streamlined coding experience, consider using [IDE plugins](https://docs.ton.org/develop/smart-contracts/environment/ide-plugins) for syntax highlighting.

### 🌍 TON Developers Community Chats

Stay in the loop and engage with other developers:

- [TON Dev Chat (EN)](https://t.me/tondev_eng)
- [TON Dev Chat (中文)](https://t.me/tondev_zh)
- [TON Dev Chat (РУ)](https://t.me/tondev)
