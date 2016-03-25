<html>
  <head>

    <title>Osteola</title>
    <meta charset="utf8">
    <link rel="stylesheet" type="text/css" href="{{ STATIC_URL }}/css/fonts/fonts.css">
    <link rel="stylesheet" type="text/css" href="{{ STATIC_URL }}/css/index.css">

    <script type="text/javascript" src="{{ STATIC_URL }}/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="{{ STATIC_URL }}/js/sammy-latest.min.js"></script>
    <script type="text/javascript" src="{{ STATIC_URL }}/js/calendar_widget.js"></script>
    <script type="text/javascript" src="{{ STATIC_URL }}/js/modal.js"></script>

    <script type="text/javascript" src="{{ url_for('contentloader:scriptjs') }}"></script>

  </head>


  <body>

    <div class="wrapperpage">

      {% include 'header/index.tpl' %}

      <div class="fadedwindow">
      </div>				<!-- Close for <div class="fadedwindow"> -->
      <div class="wrapper_content">
      </div>				<!-- Close for <div class="wrapper_content"> -->

    </div> 				<!-- Close for <div class="wrapperpage"> -->

    <div class="footer">footer</div>

  </body>
</html>

