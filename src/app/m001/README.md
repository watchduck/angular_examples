# 1 &bull; input decorator and optional property


## [entry.component.ts](entry/entry.component.ts)

This component displays an entry, which is to be provided as an object
(compare class `Entry` in [entry.ts](entry/entry.ts))

`@Input() entry?: Entry;` marks the property `entry` as optional.

`@Input() entry: Entry;` would cause the error:<br>
<i>TS2564: Property 'entry' has no initializer and is not definitely assigned in the constructor.</i>

Omitting the question marks in [entry.component.html](entry/entry.component.html) would cause the error:<br>
<i>TS2532: Object is possibly 'undefined'.</i>

`@Input() entry!: Entry;` would also work. It assures, that `entry` will always be provided.<br>
(Actually, it does not even cause a problem with the empty entry in
[main.component.html](main/main.component.html).)


## [main.component.ts](main/main.component.ts)

In the constructor `entries` is set to `initialEntries` (from [initial-entries.ts](entry/initial-entries.ts)).

## [main.component.html](main/main.component.html)

A loop creates an entry component for each object in `entries`.<br>
The object is passed to the component with the imput binding `[entry]="loopEntry"`.

And there is an entry component without input binding.
It is shown without the optional parts.

---

The question mark is called "optional chaining operator" or "safe navigation operator".
