<h1>Awesome checkbox</h1>
<p>
	This is a simple piece of js/css I created that turned out to be very handy in all projects I've worked on afterwards. It allows you to easily customize your checkboxes to make them look the way you want.
</p>
<p>
	Awesome checkbox works great with Font-awesome and bootstrap Glyphicons, but you can also create custom css classes and it will work just as well.
</p>

<h3>DEMO</h3>
<p>
	you can see it <a href="http://apeniche.github.io/awesome-checkbox" target="_blank">here</a>.

<h3>Intallation</h3>
<p>
	1. Download the code files: awesome-checkbox.js and awesome-checkbox.css.
</p>
<p>
	2. Include the Javascript (awesome-checkbox.js) and the CSS (awesome-checkbox.css) in your HTML document (css in the header and the js before the closing body tag).
</p>
<p>
	NOTE: It requires jQuery, so include it as well (if you haven't already)
</p>
<h3>Usage</h3>
<p>
	1. Add the class 'awesome-checkbox' to the checkbox you want to style.
</p>
<p>
	2. Also add the data-icon-checked attribute to the checkbox and set it to the class(es) you want to use.
</p>
<p>
	3. Also add the data-icon-unchecked attribute to the checkbox and set it to the class(es) you want to use.
</p>
<p>
	NOTE: You don't have to initialize awesome checkbox, however, if you get the HTML asynchronously (eg: with an ajax request) you need to initialize it manually running the following js function:
</p>
<p>
	initialize_awesome_checkbox()
</p>
<h3>Example</h3>
<h4>Plan HTML</h4>
<p>
	&lt;input checked=&quot;checked&quot; class=&quot;awesome-checkbox&quot; data-icon-checked=&quot;fa fa-check-circle-o&quot; data-icon-unchecked=&quot;fa fa-circle-o&quot; id=&quot;checkbox2&quot; name=&quot;checkbox2&quot; type=&quot;checkbox&quot; value=&quot;1&quot;&gt;
</p>
<h4>Ruby on Rails</h4>
<p>If you are using ruby on rails you can use a helper that will look like this:</p>
<p>
	check_box_tag "checkbox2", 1, true, :class => 'awesome-checkbox', :data => {'icon-checked' => 'fa fa-check-circle-o', 'icon-unchecked' => 'fa fa-circle-o'}
</p>
