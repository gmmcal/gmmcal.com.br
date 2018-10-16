export default {
  "date": {
    "formats": {
      "default": "%b / %Y",
      "short": "%b %d",
      "long": "%B %d, %Y"
    },
    "day_names": [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "abbr_day_names": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "month_names": [
      null,
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    "abbr_month_names": [
      null,
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "order": [
      "year",
      "month",
      "day"
    ]
  },
  "time": {
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "short": "%d %b %H:%M",
      "long": "%B %d, %Y %H:%M"
    },
    "am": "am",
    "pm": "pm"
  },
  "support": {
    "array": {
      "words_connector": ", ",
      "two_words_connector": " and ",
      "last_word_connector": ", and "
    }
  },
  "number": {
    "format": {
      "separator": ".",
      "delimiter": ",",
      "precision": 3,
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "currency": {
      "format": {
        "format": "%u%n",
        "unit": "$",
        "separator": ".",
        "delimiter": ",",
        "precision": 2,
        "significant": false,
        "strip_insignificant_zeros": false
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    },
    "human": {
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "one": "Byte",
            "other": "Bytes"
          },
          "kb": "KB",
          "mb": "MB",
          "gb": "GB",
          "tb": "TB",
          "pb": "PB",
          "eb": "EB"
        }
      },
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "unit": "",
          "thousand": "Thousand",
          "million": "Million",
          "billion": "Billion",
          "trillion": "Trillion",
          "quadrillion": "Quadrillion"
        }
      }
    }
  },
  "errors": {
    "format": "%{attribute} %{message}",
    "messages": {
      "model_invalid": "Validation failed: %{errors}",
      "inclusion": "is not included in the list",
      "exclusion": "is reserved",
      "invalid": "is invalid",
      "confirmation": "doesn't match %{attribute}",
      "accepted": "must be accepted",
      "empty": "can't be empty",
      "blank": "can't be blank",
      "present": "must be blank",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      },
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "equal_to": "must be equal to %{count}",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "other_than": "must be other than %{count}",
      "odd": "must be odd",
      "even": "must be even",
      "required": "must exist",
      "taken": "has already been taken",
      "record_invalid": "Validation failed: %{errors}",
      "restrict_dependent_destroy": {
        "one": "Cannot delete record because a dependent %{record} exists",
        "many": "Cannot delete record because dependent %{record} exist"
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "activerecord": {
    "errors": {
      "messages": {
        "record_invalid": "Validation failed: %{errors}",
        "restrict_dependent_destroy": {
          "has_one": "Cannot delete record because a dependent %{record} exists",
          "has_many": "Cannot delete record because dependent %{record} exist"
        }
      }
    }
  },
  "datetime": {
    "distance_in_words": {
      "half_a_minute": "half a minute",
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "x_seconds": {
        "one": "1 second",
        "other": "%{count} seconds"
      },
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "x_minutes": {
        "one": "1 minute",
        "other": "%{count} minutes"
      },
      "about_x_hours": {
        "one": "about 1 hour",
        "other": "about %{count} hours"
      },
      "x_days": {
        "one": "1 day",
        "other": "%{count} days"
      },
      "about_x_months": {
        "one": "about 1 month",
        "other": "about %{count} months"
      },
      "x_months": {
        "one": "1 month",
        "other": "%{count} months"
      },
      "about_x_years": {
        "one": "about 1 year",
        "other": "about %{count} years"
      },
      "over_x_years": {
        "one": "over 1 year",
        "other": "over %{count} years"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      }
    },
    "prompts": {
      "year": "Year",
      "month": "Month",
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "second": "Seconds"
    }
  },
  "helpers": {
    "select": {
      "prompt": "Please select"
    },
    "submit": {
      "create": "Create %{model}",
      "update": "Update %{model}",
      "submit": "Save %{model}"
    }
  },
  "about": {
    "title": "About Me",
    "file_title": "PDF Download"
  },
  "contact": {
    "title": "Contact me",
    "subtitle": "Feel free to contact me",
    "contacts": {
      "title": "Contacts",
      "address": {
        "city": "Amsterdam",
        "country": "Netherlands"
      },
      "phone": "+31 06 51 41 60 37",
      "email": "gustavocunha&#64;gmail&#46;com",
      "github": "gmmcal",
      "linkedin": "Gustavo Cunha",
      "twitter": "@gmmcal"
    }
  },
  "education": {
    "title": "Education and Diplomas",
    "subtitle": "What I did on my academic career"
  },
  "experience": {
    "title": "Work Experience",
    "subtitle": "Companies that I have worked for"
  },
  "skills": {
    "title": "Technical Skills",
    "subtitle": "The subjects currently under my radar, but I'm always open to new technologies."
  },
  "template": {
    "name": "Gustavo Cunha",
    "title": "Web developer, Mobile and Software Engineer Consultant",
    "current": "Currently",
    "menu": {
      "en": "EN",
      "pt-BR": "BR",
      "home": "Home",
      "about": "About",
      "skills": "Skills",
      "experience": "Experience",
      "education": "Education",
      "portfolio": "Portfolio",
      "contact": "Contact",
      "social": "Social"
    }
  }
}
