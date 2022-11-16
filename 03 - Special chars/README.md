# Special Characters

A special character in a Regexp is a character with a speacial meaning. Using them we can do more than just direct matches.

Some common ones:
^
$
\b
\B
\d – matches any decimal digit and is shorthand for [0-9].
\w – matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_].
\s – matches any white space character.
\D – matches any non-digit and is the same as [^0-9.]
\W – matches any non-word (that is non-alphanumeric) character and is shorthand for  [^A-Za-z0-9_].
\S – matches a non-white space character.
. – matches any character.