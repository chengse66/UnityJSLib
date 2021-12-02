type int=number;
type size_t=number;
type uint_16_t=number;
type uint=number;
type hwnd=number;
type Exception=string;

class LibraryManager {
    public static library: LibraryManager;
}
class Runtime{
    public dynCall(sig:"v"|"vi"|"vii"|"viii"|"viiii", ptr, args);
}

function mergeInto(library:LibraryManager,data:{});
function autoAddDeps(obj:{},member:string);

function abort(what:Exception);
function abortOnCannotGrowMemory();
function addFunction(func, sig);
function addOnPostRun(cb);
function addOnPreRun(cb);
function addRunDependency(id);
function alignMemory(size, factor);
function alignUp(x, multiple);
function allocate(slab, types, allocator, ptr);
function allocateUTF8(str);
function allocateUTF8OnStack(str);
function assert(condition, text);
function callRuntimeCallbacks(callbacks);
function ccall(ident, returnType, argTypes, args, opts);
function cwrap(ident, returnType, argTypes, opts);
function demangle(func);
function demangleAll(text);
function dynamicAlloc(size);
function dynCall(sig:"v"|"vi"|"vii"|"viii"|"viiii", ptr, args);
function emscripten_get_canvas_element_size_js(target);
function emscripten_set_canvas_element_size_js(target, width, height);
function emscriptenWebGLComputeImageSize(width, height, sizePerPixel, alignment);
function emscriptenWebGLGet(name_, p, type);
function emscriptenWebGLGetBufferBinding(target);
function emscriptenWebGLGetHeapForType(type);
function emscriptenWebGLGetIndexed(target, index, data, type);
function emscriptenWebGLGetShiftForType(type);
function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat);
function emscriptenWebGLGetUniform(program, location, params, type);
function emscriptenWebGLGetVertexAttrib(index, pname, params, type);
function emscriptenWebGLValidateMapBufferTarget(target);
function enlargeMemory();
function ensureInitRuntime();
function exit(status, implicit);
function exitRuntime();
function ExitStatus(status);
function getCFunc(ident);
function getFuncWrapper(func, sig);
function getMemory(size:size_t):hwnd;
function getNativeTypeSize(type:"i1"|"i8"|"i16"|"i32"|"i64"|"float"|"double");
function getTotalMemory():size_t;
function getUniqueRunDependency(id);
function intArrayFromString(stringy, dontAddNull, length);
function integrateWasmJS();
function isDataURI(filename);
function jsStackTrace();
function lengthBytesUTF8(str);
function locateFile(path);
function makeBigInt(low, high, unsigned);
function Pointer_stringify(ptr:string, length:int);
function postRun();
function preMain();
function preRun();
function removeRunDependency(id);
function reSign(value, bits, ignore);
function run(args);
function SendMessage(gameObject:string, func:string, param:Array);
function setValue(ptr, value, type, noSafe);
function stackTrace();
function staticAlloc(size);
function stringToUTF8(str:string, outPtr:hwnd, maxBytesToWrite:site_t);
function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite);
function unSign(value, bits, ignore);
function updateGlobalBuffer(buf);
function updateGlobalBufferViews();
function UTF8ArrayToString(u8Array, idx);
function UTF8ToString(ptr);
function warnOnce(text);
function writeArrayToMemory(array:Array, buffer:hwnd);
function writeAsciiToMemory(str:string, buffer:hwnd, dontAddNull:boolean);
function _malloc(size:number);
function _memalign(boundary:number,size:size_t);
function _memcpy(dst:hwnd,src:hwnd,size:size_t);
function _memmove(dst:hwnd,src:hwnd,size:size_t);
function _memset(s,ch:int,size:size_t);
function _ntohs(netshort:uint16_t);
function _realloc(mem_address:hwnd,newsize:uint);
function _strlen(str:string):size_t;