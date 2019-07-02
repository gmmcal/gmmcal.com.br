# Changelog
All changes to this project should be documented in this file. A similar information is also present in the [releases page](https://github.com/gmmcal/gmmcal.com.br/releases) of Github.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

You can add all changes provided by your pull request on [unreleased] section. When release is ready, I'll move all changes to a proper tag block. Please, use the most human way of describing your changes to the codebase.

## [Unreleased]
### Added
- PWA Application
- Offline version
- Icons and Favicon

### Changed
- Better error pages for 404/422/500 errors
- Dependencies updated

### Fixed
- Bump `node-tar` to `2.2.2` to fix security issue ([#152](https://github.com/gmmcal/gmmcal.com.br/pull/152))

### Removed
- Modernizr gem

## [2.9.0] - 2019-05-03
### Added
- TailwindCSS to build frontend CSS
- PurgeCSS to remove unused CSS classes in production

### Changed
- Move all frontend CSS from Asset Pipeline to Webpack
- Node bumped to `12.0.0`

### Removed
- Bootstrap on frontend
- foreman as a dependency

## [2.8.1] - 2019-04-26
### Changed
- Ruby bumped to `2.6.3`
- Rails bumped to `6.0.0.rc1`
- Drop support for Ruby lower than `2.5.0`
- Dependencies update

## [2.8.0] - 2019-03-25
### Added
- Printable version of the website.

## [2.7.2] - 2019-03-14
### Fixed
- Rails bumped to `5.2.2.1` to address security warning

## [2.7.1] - 2019-03-12
### Added
- Gitlab link to footer
- Dev.to link to footer

## [2.7.0] - 2019-02-22
### Changed
- Rewrite HomeController caching process
- Dependencies update
- Ruby bumped to `2.6.1`
- Export i18n to JSON instead of plain JS

### Fixed
- Revisit some *hidden* `reek` complaints

### Removed
- Unused CSS from components

## [2.6.0] - 2019-01-06
### Added
- Gitlab templates

### Changed
- Credentials encrypted file
- Set rails defaults to 5.2
- FactoryBot and Faker are a dependency due to seed script, but not automatically included
- Change CV button from `Download PDF` to `Download CV` to be more clear
- Updated all packages to latest versions
- Updated all gems to latest version
- Updated webpacker gem to 4.x to address CVE-2018-14732
- Move Jest configuration to `jest.config.js`

### Fixed
- End dates were not being saved on education and work experiences

### Removed
- Google Analytics code from error pages
- Contentful service
- VCR gem
- dotenv gem

## [2.5.0] - 2018-12-27
### Added
- Custom build CMS
- End-to-end tests to CMS
- Unit/Integration tests to CMS
- Handle authentication with Devise
- Handle authorization with Pundit
- Handle uploads with ActiveStorage
- Store uploads on Amazon (production only)
- I18n-debug gem (development only)

### Changed
- Reorganize locale files (frontend and backend)
- Rails bumped to `5.2.2`
- Ruby bumped to `2.5.3` and then to `2.6.0`
- README instructions

## [2.1.9] - 2018-12-03
### Fixed
- Rails bumped to `5.2.1.1` to address security warning
- Update all gems
- Update all javascript packages

## [2.1.8] - 2018-10-30
### Fixed
- Updated gem Loofah to address CVE-2018-16468

## [2.1.7] - 2018-10-18
### Added
- VCR request mocks to Contentful

### Changed
- `Cms::Sync` tests
- Reorganize `spec` folder to separate `backend` and `frontend` tests

### Removed
- Unecessary methods in `Cms::Base`
- Logger on Contentful configuration object in `Cms::Sync`

## [2.1.6] - 2018-10-16
### Fixed
- CHANGELOG Links
- CHANGELOG description text

## [2.1.5] - 2018-10-16
### Added
- CHANGELOG

### Changed
- Skills hero

### Fixed
- Responsive behaviour on WordCloud

## [2.1.4] - 2018-10-14
### Changed
- Properly cache database results

## [2.1.3] - 2018-10-12
### Changed
- Center WordCloud

## [2.1.2] - 2018-10-11
### Changed
- Change Pie Charts to WordCloud on Skills
- Skills are sorted randomly
- Review apps uses their own database instead of production
- Skills hero to match WordCloud goal

### Removed
- Unecessary fields on Skills
- `easy-pie-chart` package

## [2.1.1] - 2018-10-07
### Changed
- Update gems
- Update packages

## [2.1.0] - 2018-09-30
### Added
- End-to-end tests
- Staging environment on Heroku
- Deployment to staging via Travis (after merge to master)
- Deployment to production via Travis (after tag is created)
- Create JS objects function

### Changed
- Move all images as background images
- Use CSS to load proper image based on device setting (lazy load)
- Better README instructions
- Tests readability
- Update gems
- Seeds uses `faker` gem
- Moved component behavior functions to separate files for better readability of components
- Rewrite `About` and `Banner` components for better performance/readability
- Vue components with better props description
- Fix brazilian flag missing translation

### Removed
- Lazy Load package

## [2.0.8] - 2018-09-04
### Added
- Lazy load for images
- FontAwesome package
- Markdown component

### Changed
- Bootstrap bumped to `4.1.3`
- Move SCSS to Vue Components
- Replace `vue-markdown` to `marked`
- CacheControl header from `2 days` to `1 day`

### Removed
- Unecessary dependencies

## [2.0.7] - 2018-08-26
### Added
- Rubocop Rspec gem
- Jest serializer
- Request tests

### Changed
- Update CodeClimate configuration to version 2
- Improve frontend tests description
- Improve backend tests description

## [2.0.6] - 2018-08-26
### Changed
- New avatar

## [2.0.5] - 2018-07-19
### Changed
- Code coverage configuration

## [2.0.4] - 2018-07-18
### Changed
- Cache strategy

### Removed
- `action_caching` gem

## [2.0.3] - 2018-07-17
### Changed
- Fix turbolinks

## [2.0.2] - 2018-07-17
### Changed
- Added Redis on `app.json`
- Fix cache issue

## [2.0.1] - 2018-07-17
### Changed
- README instructions

## [2.0.0] - 2018-07-17
### Added
- Ebert as code reviewer
- Github templates
- Use foreman to start development environment
- Use Contentful as CMS
- Use Postgres as database
- Use Redis as cache
- Test suite for backend
- Test suite for frontend
- License
- Code of Conduct

### Changed
- Rails bumped to `5.2.0`
- Update gems
- Migrate frontend to Vue.js
- 404 error page

### Removed
- Deactivate engines on CodeClimate
- jQuery

## [1.4.10] - 2018-05-03
### Changed
- Travis build against multiple rubies (greater than `2.3`)
- README instructions

## [1.4.9] - 2018-05-02
### Changed
- Ruby version on Travis build
- README instructions

### Removed
- CV link

## [1.4.8] - 2018-04-09
### Added
- Add KPN position

### Changed
- Ruby bumped to `2.5.1`
- New role on About

### Removed
- Portfolio section

## [1.4.7] - 2017-08-08
### Changed
- Rails bumped to `5.1.3`

## [1.4.6] - 2017-08-08
### Changed
- Ruby bumped to `2.4.1`

## [1.4.5] - 2017-07-29
### Changed
- Rails bumped to `5.1.2`

## [1.4.4] - 2017-07-28
### Removed
- New Relic files

## [1.4.3] - 2017-07-05
### Changed
- New role on About

## [1.4.2] - 2017-07-03
### Changed
- Use turbolinks instead of jQuery for load event

## [1.4.1] - 2017-07-01
### Added
- Add Streetbees position

## [1.4.0] - 2017-06-19
### Added
- Use `yarn` to manage frontend dependencies
- Puma configuration file
- `webpack` configuration file

### Changed
- Rails bumped to `5.1.1`
- Moved almost all JS dependencies to `yarn` (some were not present)
- Skills content

### Removed
- Dummy controller test

## [1.3.2] - 2017-03-28
### Changed
- `application_controller` hook from `before_filter` to `before_action`
- Use relative path instead of absolute on profile image

## [1.3.1] - 2017-03-28
### Removed
- Force SSL configuration

## [1.3.0] - 2017-03-27
### Added
- Migrate to Heroku

### Changed
- Rails bumped to `5.0.2`
- Ruby bumped to `2.4.0`
- Update gems

### Removed
- Capistrano files and gems

## [1.2.1] - 2017-03-27
### Added
- Heroku `app.json` configuration

## [1.2.0] - 2017-01-05
### Changed
- Rails bumped to `4.2.7.1`
- Update gems
- Remove TODOs

## [1.1.20] - 2017-01-05
### Changed
- Fix urls without `https` protocol

## [1.1.19] - 2017-01-05
### Added
- Force use of SSL in production

## [1.1.18] - 2016-08-01
### Changed
- Update CV in English

## [1.1.17] - 2016-08-01
### Changed
- Update CVs

## [1.1.16] - 2016-06-20
### Changed
- Fix issue on flag background image

## [1.1.15] - 2016-06-20
### Changed
- Use `asset_url` on SCSS for asset pipeline
- Fix issue on `a` tags without link

## [1.1.14] - 2016-
### Changed
- 404 missing background image

## [1.1.13] - 2016-06-13
### Changed
- Cleanup commented CSS line

## [1.1.12] - 2016-06-13
### Changed
- Change 404 CSS issue

## [1.1.11] - 2016-06-13
### Changed
- Capistrano production task

### Removed
- `development` capistrano task

## [1.1.10] - 2016-06-13
### Added
- CSSLint rules
- Rubocop rules

### Changed
- CodeClimate engines configurations

### Removed
- `stage` environment

## [1.1.9] - 2016-06-13
### Added
- CONTRIBUTING guide
- Requirements instructions on README
- Installation instructions on README
- Contributing instructions on README

## [1.1.8] - 2016-06-13
### Added
- Travis configuration file
- CodeClimate configuration file

## [1.1.7] - 2016-06-13
### Changed
- Update gems after Hakiri report

## [1.1.6.1] - 2016-06-13
### Added
- Badges on README

### Changed
- README is now using Markdown

## [1.1.6] - 2016-06-13
### Changed
- Server configuration on puma server

## [1.1.5] - 2016-03-25
### Added
- Use puma as production server

### Changed
- Rails bumped to `4.2.6`

## [1.1.4] - 2015-11-03
### Added
- Landing.jobs position

### Changed
- Ruby bumped to `2.2.2`
- Contact content from Brazil to Portugal

## [1.1.3] - 2015-07-22
### Added
- i18n content
- Support for English and Portuguese websites
- Default timezone to Brasilia

### Changed
- Views content comes from i18n files
- Rails bumped to `4.2.3`

### Removed
- Static portuguese content on views

## [1.1.2] - 2015-05-22
### Changed
- `newrelic.yml` configuration
- Environment variables setup gem

## [1.1.1] - 2015-05-22
### Added
- New Relic monitoring

## [1.1.0] - 2015-01-05
### Changed
- Rails bumped to `4.2.0`
- Ruby bumped to `2.2.0`
- Gems updated

## [1.0.9] - 2014-10-27
### Added
- Missing background image

### Changed
- Image paths on CSS

## [1.0.8] - 2014-10-27
### Added
- Add sitemap.xml

## [1.0.7] - 2014-10-27
### Added
- Add schema.org tags

## [1.0.6] - 2014-10-25
### Changed
- Update SEO Content

## [1.0.5] - 2014-10-25
### Changed
- Responsive behavior on contacts

## [1.0.4] - 2014-10-25
### Changed
- Copy updates

## [1.0.3] - 2014-10-24
### Changed
- 404 page

## [1.0.2] - 2014-10-24
### Added
- Open Graph tags

## [1.0.1] - 2014-07-10
### Added
- Google analytics script

## 1.0.0 - 2014-10-24
### Added
- First release
- Static website in Portuguese

[Unreleased]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.9.0...HEAD
[2.9.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.8.1...v2.9.0
[2.8.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.8.0...v2.8.1
[2.8.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.7.2...v2.8.0
[2.7.2]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.7.1...v2.7.2
[2.7.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.7.0...v2.7.1
[2.7.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.9...v2.5.0
[2.1.9]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.8...v2.1.9
[2.1.8]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.7...v2.1.8
[2.1.7]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.6...v2.1.7
[2.1.6]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.5...v2.1.6
[2.1.5]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.4...v2.1.5
[2.1.4]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.2...v2.1.3
[2.1.2]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.8...v2.1.0
[2.0.8]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.7...v2.0.8
[2.0.7]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.6...v2.0.7
[2.0.6]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.5...v2.0.6
[2.0.5]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.4...v2.0.5
[2.0.4]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.3...v2.0.4
[2.0.3]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.1...v2.0.0
[1.4.10]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.9...v1.4.10
[1.4.9]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.8...v1.4.9
[1.4.8]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.7...v1.4.8
[1.4.7]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.6...v1.4.7
[1.4.6]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.5...v1.4.6
[1.4.5]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.4...v1.4.5
[1.4.4]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.3.2...v1.4.0
[1.3.2]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.2...v1.2.0
[1.1.20]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.19...v1.1.20
[1.1.19]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.18...v1.1.19
[1.1.18]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.17...v1.1.18
[1.1.17]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.16...v1.1.17
[1.1.16]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.15...v1.1.16
[1.1.15]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.14...v1.1.15
[1.1.14]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.13...v1.1.14
[1.1.13]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.12...v1.1.13
[1.1.12]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.11...v1.1.12
[1.1.11]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.10...v1.1.11
[1.1.10]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.9...v1.1.10
[1.1.9]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.8...v1.1.9
[1.1.8]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.7...v1.1.8
[1.1.7]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.6...v1.1.7
[1.1.6.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.6...v1.1.6.1
[1.1.6]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.5...v1.1.6
[1.1.5]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.4...v1.1.5
[1.1.4]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.9...v1.1.0
[1.0.9]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.8...v1.0.9
[1.0.8]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/gmmcal/gmmcal.com.br/compare/v1.0.0...v1.0.1
