import logging
import datetime

from flaskcbv.view.generic import View
from flaskcbv.view.mixins import getArgumentMixin, JSONMixin
from flaskcbv.response import Response
from misc.mixins import myTemplateView


class indexView(myTemplateView):
    template='index.tpl'

class calendView(myTemplateView):
    template='calend/calend.tpl'


class calendDataView(JSONMixin, getArgumentMixin, View):

    def get_context_data(self, **kwargs):
        context = super(calendDataView, self).get_context_data(**kwargs)
        context['days'] = []
        if self.__days  is not None:
	    context['days'] = {'23.03.2016': {'some': 'test',}}
        return context

    def get_json_indent(self):
        return self.__json_indent

    def get(self, *args, **kwargs):
        try: self.__days = self.get_argument_smart('days')
        except: self.__days = None

        try: self.__json_indent = int(self.request.args['json_indent'])
        except: self.__json_indent = None

        super(calendDataView, self).get(*args, **kwargs)

        return Response(self.get_as_json())


