// ERROR 1: What's wrong here?
function BadComponent1() {
return (
<h1>Hello</h1>
<p>This is broken</p>
)
}
// ERROR 2: What's wrong here?
function BadComponent2() {
const isTrue = true
return (
<div>
<p>Result: {if (isTrue) { 'Yes' }}</p>
</div>
)
}
// ERROR 3: What's wrong here?
function BadComponent3() {
return (
<div class="container">
<img src="cat.jpg">
<p>A paragraph</p>
</div>
)
