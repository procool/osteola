import logging
import datetime

from misc.mixins import myTemplateView


class indexView(myTemplateView):
    template='index.tpl'

class mapView(myTemplateView):
    template='map/map.tpl'
