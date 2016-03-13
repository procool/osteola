        <div class="doctors_block">
          <div class="doctors_block_name">
            Запись на приём к врачу:
          </div>			<!-- Close for <div class="doctors_block_name"> -->
          <div class="doctors_block_content">
            <div class="doctors_specialization">

              {% include 'doctors-specialization.tpl'%}
   
              <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
              <script type="text/javascript" src="{{ STATIC_URL }}/js/carusel/jquery.easing.1.3.js"></script>
              <!-- the jScrollPane script -->
              <script type="text/javascript" src="{{ STATIC_URL }}/js/carusel/jquery.contentcarousel.js"></script>
              <script type="text/javascript">
                      $('.ca-container').contentcarousel();
              </script>

            </div>			<!-- Close for <div class="doctors_specialization"> -->
          </div>			<!-- Close for <div class="doctors_block_content"> -->
        </div>				<!-- Close for <div class="doctors_block"> -->
