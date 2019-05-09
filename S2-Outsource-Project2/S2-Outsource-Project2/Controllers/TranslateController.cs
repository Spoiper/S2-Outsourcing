using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace S2_Outsource_Project2.Controllers
{
    public class TranslateController : Controller
    {
	    public IActionResult Index()
	    {
		    ViewBag.Test = "hallo";
		    ViewBag.Test2 = "groen";
		    ViewBag.Test3 = "kaas";
			return View();
	    }


		public IActionResult TranslateEn()
		{
			ViewBag.Test = "hello";
			ViewBag.Test2 = "green";
			ViewBag.Test3 = "cheese";
			return View("Index");
		}
	}
}