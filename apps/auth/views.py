import logging
import datetime

from misc.mixins import myTemplateView


class indexView(myTemplateView):
    template='index.tpl'

class expressauthView(myTemplateView):
    template='auth/expressauth.tpl'

class regView(myTemplateView):
    template='auth/reg.tpl'

class repairView(myTemplateView):
    template='auth/repair.tpl'
