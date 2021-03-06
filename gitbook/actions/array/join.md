## Join
[[source]({{book.rep}}/actions/array/join.js)]

> Adapter native [`Array.join`](https://www.w3schools.com/jsref/jsref_join.asp) for apop
> ### Arguments
> 
> separator(String): ", "
> 
> ### Returns
> 
> (Function): Returns Function that return joined Array.

### Examples: 
{% codetabs name="Simple", type="js" -%} 
let ap = require('apop/ap');
ap.join("#")([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => "1#2#3#4#5#6,7,8,9,10"

{%- language name="Action", type="js" -%}
let ap = require('apop/ap/join');
join("#")([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => "1#2#3#4#5#6,7,8,9,10"

{%- language name="Recursive", type="js" -%}
let ap = require('apop/ap');
ap.recursive(ap.join("#"))([1, 2, 3, 4, 5, [6, 7, 8, 9, 10]])
// => ["1#2#3#4#5", ["6#7#8#9#10"]]


{%- endcodetabs %}


## Interactive Example:

{% runkit %}
let ap = require('apop/ap');
let formula = ap(
    ap.filter(currentValue => currentValue < 4), // => [3, 2, 1]
    ap.sort((a, b) => a - b), // => [1, 2, 3]
    ap.join('#')  // => "1#2#3"
);

formula([5, 4, 3, 2, 1])
{% endrunkit %}



