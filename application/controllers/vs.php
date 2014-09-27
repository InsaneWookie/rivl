<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Vs extends CI_Controller {


	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{

        $this->output->set_header('Cache-Control: no-cache, no-store, must-revalidate'); // HTTP 1.1.
        $this->output->set_header('Pragma: no-cache'); // HTTP 1.0.
        $this->output->set_header('Expires: 0'); // Proxies.

		$data = array(
			'email' => $this->input->cookie('user_email', TRUE),
			'assertion' => $this->input->cookie('assertion', TRUE));



		//$this->load->view('index',$data);
		readfile('app/index.html');

	}


}