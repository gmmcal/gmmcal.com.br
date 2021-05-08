# Contributing

We love pull requests from everyone. By participating in this project, you're encouraged to submit [pull requests](https://github.com/gmmcal/gmmcal.com.br/pulls), [propose features and discuss issues](https://github.com/gmmcal/gmmcal.com.br/issues). When in doubt, ask a question using issues.

#### Fork the Project

Fork the [project on Github](https://github.com/gmmcal/gmmcal.com.br) and check out your copy.

```
git clone https://github.com/contributor/gmmcal.com.br.git
cd gmmcal.com.br
git remote add upstream https://github.com/gmmcal/gmmcal.com.br.git
```

#### Create a Topic Branch

Make sure your fork is up-to-date and create a topic branch for your feature or bug fix.

```
git checkout main
git pull upstream main
git checkout -b my-feature-branch
```
#### Write Tests

Try to write a test that reproduces the problem you're trying to fix or describes a feature that you want to build.

We definitely appreciate pull requests that highlight or reproduce a problem, even without a fix.

#### Write Code

Implement your feature or bug fix.

#### Write Documentation

Document any external behavior in the [README](../README.md).

#### Commit Changes

Make sure git knows your name and email address:

```
git config --global user.name "Your Name"
git config --global user.email "contributor@example.com"
```

Writing good commit logs is important. A commit log should describe what changed and why.

```
git add ...
git commit
```

#### Push

```
git push origin my-feature-branch
```

#### Make a Pull Request

Go to https://github.com/contributor/gmmcal.com.br and select your feature branch. Click the 'Pull Request' button and fill out the form. Pull requests are usually reviewed within a few days.

#### Rebase

If you've been working on a change for a while, rebase with upstream/main.

```
git fetch upstream
git rebase upstream/main
git push origin my-feature-branch -f
```

#### Check on Your Pull Request

Go back to your pull request after a few minutes and see whether it passed required Github Actions. Everything should look green, otherwise fix issues and amend your commit as described above.

#### Be Patient

It's likely that your change will not be merged and that the nitpicky maintainers will ask you to do more, or fix seemingly benign problems. Hang on there!

#### Thank You

Please do know that we really appreciate and value your time and work. We love you, really.
