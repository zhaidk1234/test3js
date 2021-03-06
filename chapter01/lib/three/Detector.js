/**
 * 用于判断显卡或浏览器是否支持WebGL
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !!window.CanvasRenderingContext2D,
	webgl: (function () {

		try {

			var canvas = document.createElement('canvas');
			return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));

		} catch (e) {

			return false;

		}

	})(),
	workers: !!window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement('div');
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if (!this.webgl) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'您的显卡似乎不支持<a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'了解更多<a href="http://get.webgl.org/" style="color:#000">点击这里</a>.'
			].join('\n') : [
				'您的浏览器似乎不支持 <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'了解更多<a href="http://get.webgl.org/" style="color:#000">点击这里</a>.'
			].join('\n');

		}

		return element;

	},

	addGetWebGLMessage: function (parameters) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild(element);

	}

};

// browserify support
if (typeof module === 'object') {

	module.exports = Detector;

}