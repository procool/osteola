import logging
import datetime

from misc.mixins import myTemplateView


class indexView(myTemplateView):
    template='index.tpl'

class mainView(myTemplateView):
    template='main/main.tpl'
