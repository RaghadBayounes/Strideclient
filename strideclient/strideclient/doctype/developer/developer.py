# Copyright (c) 2023, Raghad Tareg and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document
import frappe

class Developer(Document):
	#  pass
	def before_save(self):	

		name_fn = frappe.db.get_value('Developer', 'Dev-2023-0002', 'first_name')
		if name_fn.__eq__(self.first_name):
			frappe.throw(('Sorry! the name is registered before!'))
		else:
			frappe.msgprint(('Thank you! registered successfully!'))

# doc = frappe.get_doc('Developer', 'Dev-2023-0003')
# doc.first_name = 'Reem'
# doc.save()
	# frappe.msgprint(('Sorry, The name is registerd before!'))
	# def before_save(self):
	# 	if self.first_name:
	# 		if self.first_name.__eq__("Raghad"): 
	# 			frappe.throw(__('This is an Error Message'))
				

 # frappe.msgprint(('Thank you, your information saved!'))
		# frappe.throw(__('This is an Error Message'))
		# # frappe.msgprint(('Thank you !'))


	# # get properties
	# doc.title

	# # set properties to the document
	# doc.first_name = 'Reem'

	# # save a document to the database
	# doc.save()