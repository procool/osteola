import logging
import datetime

from misc.mixins import myTemplateView

class cabinetView(myTemplateView):
    template='cabinet/cabinet.tpl'

class personView(myTemplateView):
    template='cabinet/person.tpl'
