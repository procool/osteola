      <div class="content">
        <div class="doctors_block" style="border-radius: 15px;">
          <div class="doctors_block_name" style="font-size: 25px;">
            Запись на приём к врачу:
          </div>                        <!-- Close for <div class="doctors_block_name"> -->
          <div class="doctors_block_content">
            <div class="doctors_specialization">
              <div class="doctors_specialization_name" style="font-weight: bolder; font-size: 20px;">
                Остеопатия:
              </div>                    <!-- Close for <div class="doctors_specialization_name" -->
              <div class="doctors_specialization_content">

                  {% include 'main/doctors/osteopaty.tpl' %}

                <script type="text/javascript" src="{{ STATIC_URL }}/js/jquery-1.10.2.min.js"></script>
                <script type="text/javascript" src="{{ STATIC_URL }}/js/carusel/jquery.easing.1.3.js"></script>
                <!-- the jScrollPane script -->
                <script type="text/javascript" src="{{ STATIC_URL }}/js/carusel/jquery.contentcarousel.js"></script>
                <script type="text/javascript">
                        $('#ca-container').contentcarousel();
                </script>



              </div>                    <!-- Close for <div class="doctors_specialization_content" -->

            </div>                      <!-- Close for <div class="doctors_specialization"> -->

            <div class="doctors_specialization" style="margin-top: 20px;">
              <div class="doctors_specialization_name" style="font-weight: bolder; font-size: 20px;">
                Лечебная Физкультура:
              </div>                    <!-- Close for <div class="doctors_specialization_name" -->
              <div class="doctors_specialization_content">

                  {% include 'main/doctors/msg.tpl' %}

                <script type="text/javascript" src="{{ STATIC_URL }}/js/jquery-1.10.2.min.js"></script>
                <script type="text/javascript" src="{{ STATIC_URL }}/js/carusel/jquery.easing.1.3.js"></script>
                <!-- the jScrollPane script -->
                <script type="text/javascript" src="{{ STATIC_URL }}/js/carusel/jquery.contentcarousel.js"></script>
                <script type="text/javascript">
                        $('#ca-container').contentcarousel();
                </script>



              </div>                    <!-- Close for <div class="doctors_specialization_content" -->

            </div>                      <!-- Close for <div class="doctors_specialization"> -->

          </div>                        <!-- Close for <div class="doctors_block_content"> -->
        </div>                          <!-- Close for <div class="doctors_block"> -->

        <div class="seminars_block">
          <div class="seminars_block_name">
            Запись на семинар:
          </div>                        <!-- Close for <div class="seminars_block_name"> -->
          <div class="seminar_block_content">
            Seminars
          </div>                        <!-- Close for <div class="seminar_block_content"> -->
        </div>                          <!-- Close for <div class="seminars_block"> -->
      </div>                            <!-- Close for <div class="content"> -->

