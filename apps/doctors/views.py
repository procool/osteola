import logging
import datetime

from misc.mixins import myTemplateView


class indexView(myTemplateView):
    template='index.tpl'

class doctorsView(myTemplateView):
    template='doctors/doctors.tpl'
