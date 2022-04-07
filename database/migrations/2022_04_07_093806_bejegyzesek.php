<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Bejegyzesek extends Migration
{
    public function up()
    {
        Schema::create('bejegyzesek', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('tevekenyseg_id');
            $table->foreign('tevekenyseg_id')->references('tevekenyseg_id')->on('tevekenyseg');
            $table->integer('osztaly_id');
            $table->string('allapot');
            $table->timestamps();
        });
    }
    public function down()
    {
        
    }
}
